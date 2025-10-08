// js/main.js
// Ini adalah file utama yang mengatur alur kerja aplikasi.

// --- IMPORTS ---
// Mengimpor data dan fungsi dari file lain.
import { WHATSAPP_NUMBERS } from './config.js';
import { allMenuData } from './data.js';
import {
  formatRupiah,
  renderMenu,
  renderFilters,
  renderCart,
  updateTotalPriceAndButtons,
  openModal,
  closeModal
} from './ui.js';

// Menjalankan kode setelah semua elemen HTML dimuat
document.addEventListener('DOMContentLoaded', function() {
  // --- STATE MANAGEMENT ---
  // State adalah data yang bisa berubah seiring interaksi pengguna.
  let shoppingCart = [];
  let currentAdminIndex = 0;
  
  // --- SELECTORS ---
  // Memilih semua elemen HTML yang kita butuhkan.
  const menuListContainer = document.getElementById('menu-list');
  const noResultsMsg = document.getElementById('no-results');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartEmptyMsg = document.getElementById('cart-empty-msg');
  const totalPriceDisplay = document.getElementById('total-price-display');
  const orderButtonsContainer = document.getElementById('order-buttons-container');
  const customerNameInput = document.getElementById('customer-name');
  const customerAddressInput = document.getElementById('customer-address');
  const customerDateInput = document.getElementById('customer-date');
  const customerTimeInput = document.getElementById('customer-time');
  const notesInput = document.getElementById('notes');
  const clearCartBtn = document.getElementById('clear-cart-btn');
  const searchInput = document.getElementById('search-input');
  const filterContainer = document.getElementById('filter-container');
  const itemDetailModal = document.getElementById('item-detail-modal');
  const confirmModal = document.getElementById('confirm-modal');
  const closeDetailModalBtn = document.getElementById('close-detail-modal-btn');
  const cancelOrderBtn = document.getElementById('cancel-order-btn');
  const confirmOrderBtn = document.getElementById('confirm-order-btn');
  const floatingCartContainer = document.getElementById('floating-cart-container');
  const floatingCartBtn = document.getElementById('floating-cart-btn');
  const floatingCartTotal = document.getElementById('floating-cart-total');
  // --- FUNGSI UNTUK LOCAL STORAGE ---
function saveCartToLocalStorage() {
  localStorage.setItem('savedAPSMenuCart', JSON.stringify(shoppingCart));
}
function checkForSavedCart() {
  const savedCartJSON = localStorage.getItem('savedAPSMenuCart');
  const savedCart = JSON.parse(savedCartJSON);
  
  // Cek apakah ada data keranjang yang tersimpan dan tidak kosong
  if (savedCart && savedCart.length > 0) {
    const banner = document.getElementById('restore-cart-banner');
    const restoreBtn = document.getElementById('restore-cart-btn');
    const dismissBtn = document.getElementById('dismiss-restore-btn');
    
    // Tampilkan banner
    banner.classList.remove('hidden');
    
    // Event saat tombol "Ya, Muat Lagi" diklik
    restoreBtn.addEventListener('click', () => {
      shoppingCart = savedCart; // Ganti keranjang saat ini dengan yang tersimpan
      updateCartUI(); // Perbarui tampilan
      saveCartToLocalStorage(); // Simpan lagi untuk konsistensi
      banner.classList.add('hidden'); // Sembunyikan banner
    });
    
    // Event saat tombol "Tutup" (X) diklik
    dismissBtn.addEventListener('click', () => {
      banner.classList.add('hidden');
    });
  }
}
  // --- FUNGSI UNTUK SLIDESHOW ---
function renderRecommendationSlideshow() {
  const swiperWrapper = document.querySelector('.recommendation-slider .swiper-wrapper');
  if (!swiperWrapper) return;
  
  // 1. Filter hanya menu yang direkomendasikan
  const recommendedItems = allMenuData.filter(item => item.isRecommended);
  
  // 2. Buat HTML untuk setiap slide
  let slidesHtml = '';
  recommendedItems.forEach(item => {
    slidesHtml += `
            <div class="swiper-slide">
                <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-32 object-cover">
                    <div class="p-4 flex-grow flex flex-col">
                        <p class="font-bold text-slate-800 flex-grow">${item.name}</p>
                        <div class="mt-2 flex justify-between items-center">
                            <span class="font-semibold text-slate-700">${formatRupiah(item.price)}</span>
                            <button class="add-to-cart-btn text-sm bg-amber-500 text-white font-semibold py-1 px-3 rounded-full hover:bg-amber-600" data-id="${item.id}">Tambah</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });
  
  // 3. Masukkan slide ke dalam HTML
  swiperWrapper.innerHTML = slidesHtml;
}
  // --- RENDER & UPDATE FUNCTIONS WRAPPER ---
  // Fungsi pembungkus untuk memanggil fungsi UI dengan state saat ini.
  function updateCartUI() {
    renderCart(cartItemsContainer, cartEmptyMsg, shoppingCart);
    updateTotalPriceAndButtons(totalPriceDisplay, floatingCartTotal, floatingCartContainer, shoppingCart);
  }
  
  // --- EVENT HANDLING ---
  // Menangani semua interaksi dari pengguna.
  
  // Klik pada daftar menu (tambah ke keranjang atau lihat detail)
  menuListContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart-btn')) {
      const button = e.target;
      const itemId = button.dataset.id;
      const itemData = allMenuData.find(item => item.id === itemId);
      if (!itemData) return;
      const existingItem = shoppingCart.find(item => item.id === itemId);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        shoppingCart.push({ ...itemData, quantity: 1 });
      }
      button.innerHTML = '✓';
      setTimeout(() => { button.innerHTML = 'Tambah'; }, 1000);
      updateCartUI();
      saveCartToLocalStorage();
    }
    if (e.target.classList.contains('menu-item-img')) {
      const groupName = e.target.dataset.groupName;
      const itemData = allMenuData.find(item => (item.group || item.name) === groupName);
      document.getElementById('detail-modal-img').src = itemData.image;
      document.getElementById('detail-modal-name').textContent = groupName;
      document.getElementById('detail-modal-desc').textContent = itemData.desc;
      openModal(itemDetailModal);
    }
  });
  
  // Klik di dalam keranjang (tambah/kurang jumlah)
  cartItemsContainer.addEventListener('click', function(e) {
    const target = e.target;
    if (!target.classList.contains('quantity-btn')) return;
    const itemId = target.dataset.id;
    const itemInCartIndex = shoppingCart.findIndex(item => item.id === itemId);
    if (itemInCartIndex === -1) return;
    if (target.classList.contains('increase-qty')) {
      shoppingCart[itemInCartIndex].quantity++;
    } else if (target.classList.contains('decrease-qty')) {
      shoppingCart[itemInCartIndex].quantity--;
      if (shoppingCart[itemInCartIndex].quantity <= 0) {
        shoppingCart.splice(itemInCartIndex, 1);
      }
    }
    updateCartUI();
    saveCartToLocalStorage();
  });
  
  // Mengosongkan keranjang
  clearCartBtn.addEventListener('click', () => {
    if (shoppingCart.length > 0) {
      shoppingCart = [];
      updateCartUI();
      saveCartToLocalStorage();
    }
  });
  
  // Mengirim pesanan
  orderButtonsContainer.addEventListener('click', function(e) {
    const button = e.target.closest('.send-order-btn');
    if (!button) return;
    let isFormValid = true;
    let firstInvalidField = null;
    [customerNameInput, customerAddressInput, customerDateInput, customerTimeInput].forEach(input => {
      input.classList.remove('validation-error');
      if (!input.value.trim()) {
        input.classList.add('validation-error');
        isFormValid = false;
        if (!firstInvalidField) firstInvalidField = input;
      }
    });
    if (!isFormValid) {
      if (firstInvalidField) firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      confirmModal.querySelector('h3').textContent = "Data Tidak Lengkap";
      confirmModal.querySelector('p').textContent = "Harap lengkapi semua informasi pelanggan (Nama, Alamat, Tanggal, dan Jam).";
      confirmOrderBtn.style.display = 'none';
      cancelOrderBtn.textContent = 'Mengerti';
      openModal(confirmModal);
      return;
    }
    currentAdminIndex = parseInt(button.dataset.adminIndex);
    confirmModal.querySelector('h3').textContent = "Konfirmasi Pesanan";
    confirmModal.querySelector('p').textContent = "Apakah Anda yakin dengan pesanan ini dan ingin melanjutkannya ke WhatsApp?";
    confirmOrderBtn.style.display = 'inline-flex';
    cancelOrderBtn.textContent = 'Batal';
    openModal(confirmModal);
  });
  
  // Konfirmasi pesanan dan kirim ke WhatsApp
  confirmOrderBtn.addEventListener('click', () => {
    const designatedAdminNumber = WHATSAPP_NUMBERS[currentAdminIndex];
    const dateValue = customerDateInput.value;
    const formattedDate = dateValue ? dateValue.split('-').reverse().join('-') : 'Tidak diisi';
    const timeValue = customerTimeInput.value || 'Tidak diisi';
    let message = `Halo, saya mau pesan atas nama:\n\n` +
      `*Nama:* ${customerNameInput.value.trim()}\n` +
      `*Alamat:* ${customerAddressInput.value.trim()}\n` +
      `*Tgl Pengiriman:* ${formattedDate}\n` +
      `*Jam Pengiriman:* ${timeValue}\n\n` +
      `*Pesanan:*\n`;
    shoppingCart.forEach(item => {
      message += `\n- *${item.name}* (Qty: ${item.quantity}) - ${formatRupiah(item.price * item.quantity)}`;
    });
    const notes = notesInput.value.trim();
    message += `\n\n*Catatan:* ${notes || '-'}\n\n*TOTAL HARGA: ${totalPriceDisplay.innerText}*`;
    message += `\n\nTerima kasih. Mohon konfirmasi pesanannya.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${designatedAdminNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    closeModal(confirmModal);
  });
  
  // Pencarian dan filter menu
  function handleSearchAndFilter() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
    const filteredItems = allMenuData.filter(item => {
      const matchesCategory = activeCategory === 'Semua' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchTerm) || (item.group && item.group.toLowerCase().includes(searchTerm));
      return matchesCategory && matchesSearch;
    });
    renderMenu(menuListContainer, noResultsMsg, filteredItems);
  }
  searchInput.addEventListener('input', handleSearchAndFilter);
  filterContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('filter-btn')) {
      document.querySelector('.filter-btn.active').classList.remove('active');
      e.target.classList.add('active');
      handleSearchAndFilter();
    }
  });
  
  // Event handler untuk modal dan floating cart
  closeDetailModalBtn.addEventListener('click', () => closeModal(itemDetailModal));
  cancelOrderBtn.addEventListener('click', () => closeModal(confirmModal));
  itemDetailModal.addEventListener('click', (e) => { if (e.target === itemDetailModal) closeModal(itemDetailModal); });
  confirmModal.addEventListener('click', (e) => { if (e.target === confirmModal) closeModal(confirmModal); });
  floatingCartBtn.addEventListener('click', () => {
    document.getElementById('cart-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  
  // --- INITIALIZATION ---
  // Menyiapkan tampilan awal saat halaman dimuat.
// --- INITIALIZATION ---
function initializeApp() {
  checkForSavedCart();
  renderFilters(filterContainer, allMenuData);
  renderMenu(menuListContainer, noResultsMsg, allMenuData);
  updateCartUI();
  renderRecommendationSlideshow(); // <-- PANGGIL FUNGSI BARU DI SINI
  
  // Aktifkan Swiper setelah slide dibuat
// Ganti blok 'new Swiper' yang lama dengan yang ini

const swiper = new Swiper('.recommendation-slider', {
  effect: 'coverflow', // Menambahkan efek coverflow
  grabCursor: true,
  centeredSlides: true, // Slide aktif akan selalu di tengah
  slidesPerView: 'auto', // Jumlah slide yang terlihat ditentukan otomatis
  loop: true, // Agar bisa berputar tanpa batas
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
}
initializeApp();
  
  // --- SERVICE WORKER ---
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('Service Worker Menu Online berhasil didaftarkan:', registration);
      }).catch(error => {
        console.log('Pendaftaran Service Worker Menu Online gagal:', error);
      });
    });
  }
});