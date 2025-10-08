// js/ui.js
// File ini berisi semua fungsi yang berkaitan dengan User Interface (UI).

// --- FUNGSI-FUNGSI TAMPILAN (RENDER & UPDATE) ---

export function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
}

export function renderMenu(menuListContainer, noResultsMsg, itemsToRender) {
  menuListContainer.innerHTML = '';
  noResultsMsg.style.display = itemsToRender.length === 0 ? 'block' : 'none';
  const groupedMenu = itemsToRender.reduce((acc, item) => {
    const groupName = item.group || item.name;
    if (!acc[groupName]) {
      acc[groupName] = { image: item.image, desc: item.desc, items: [] };
    }
    acc[groupName].items.push(item);
    return acc;
  }, {});
  for (const groupName in groupedMenu) {
    const group = groupedMenu[groupName];
    const card = document.createElement('div');
    card.className = 'bg-white/60 border border-white/50 rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] flex flex-col p-4';
    let content = `
                    <img src="${group.image}" alt="${groupName}" class="menu-item-img w-full h-40 object-cover rounded-lg mb-4 cursor-pointer" data-group-name="${groupName}">
                    <div class="flex-grow">
                        <p class="font-bold text-slate-800 text-lg">${groupName}</p>`;
    if (group.items.length === 1) {
      const item = group.items[0];
let noteHtml = '';
if (item.note) {
  noteHtml = `<p class="text-xs text-red-600 font-medium mt-1">${item.note}</p>`;
}

content += `<p class="text-slate-700 font-semibold text-base">${formatRupiah(item.price)}</p>
            ${noteHtml} </div>
                        <div class="mt-4">
                            <button class="add-to-cart-btn w-full bg-amber-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-amber-600 transition-colors" data-id="${item.id}">Tambah</button>
                        </div>`;
    } else {
      content += `</div><div class="mt-3 space-y-2.5">`;
      group.items.forEach(item => {
        const variantName = item.name.replace(groupName, '').replace('()', '').trim();
        let noteHtml = ''; // Siapkan variabel untuk menampung HTML note
if (item.note) {
  // Jika ada, isi variabel dengan elemen paragraf kecil berwarna merah
  noteHtml = `<p class="text-xs text-red-600 font-medium">${item.note}</p>`;
}

content += `<div class="flex items-center justify-between p-2 rounded-md hover:bg-amber-50">
                <div>
                    <p class="text-sm font-medium text-slate-700">${variantName}</p>
                    ${noteHtml} <p class="text-sm font-semibold text-slate-800">${formatRupiah(item.price)}</p>
                </div>
                                <button class="add-to-cart-btn text-sm bg-amber-100 text-amber-800 font-semibold py-1 px-3 rounded-full hover:bg-amber-200" data-id="${item.id}">Tambah</button>
                            </div>`;
      });
      content += `</div>`;
    }
    card.innerHTML = content;
    menuListContainer.appendChild(card);
  }
}

export function renderFilters(filterContainer, allMenuData) {
  const categories = ['Semua', ...new Set(allMenuData.map(item => item.category))];
  filterContainer.innerHTML = '';
  categories.forEach(category => {
    const button = document.createElement('button');
    button.className = 'filter-btn px-4 py-1.5 bg-white/50 border border-slate-300 text-slate-700 rounded-full text-sm font-medium hover:bg-white/80 hover:border-slate-400';
    button.textContent = category;
    button.dataset.category = category;
    if (category === 'Semua') {
      button.classList.add('active');
    }
    filterContainer.appendChild(button);
  });
}

export function renderCart(cartItemsContainer, cartEmptyMsg, shoppingCart) {
  cartItemsContainer.innerHTML = '';
  if (shoppingCart.length === 0) {
    cartItemsContainer.appendChild(cartEmptyMsg);
    cartEmptyMsg.style.display = 'block';
  } else {
    cartEmptyMsg.style.display = 'none';
    shoppingCart.forEach(item => {
      const cartItemElement = document.createElement('div');
      cartItemElement.className = 'cart-item';
      cartItemElement.innerHTML = `
                        <div class="cart-item-details">
                            <p class="font-semibold text-slate-800 text-sm">${item.name}</p>
                            <p class="text-xs text-slate-600">${formatRupiah(item.price)}</p>
                        </div>
                        <div class="cart-item-actions">
                            <button class="quantity-btn decrease-qty" data-id="${item.id}">-</button>
                            <span class="mx-3 w-6 text-center font-bold text-slate-800">${item.quantity}</span>
                            <button class="quantity-btn increase-qty" data-id="${item.id}">+</button>
                        </div>`;
      cartItemsContainer.appendChild(cartItemElement);
    });
  }
}

export function updateTotalPriceAndButtons(totalPriceDisplay, floatingCartTotal, floatingCartContainer, shoppingCart) {
  const total = shoppingCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const formattedTotal = formatRupiah(total);
  totalPriceDisplay.innerText = formattedTotal;
  document.querySelectorAll('.send-order-btn').forEach(button => button.disabled = shoppingCart.length === 0);
  if (shoppingCart.length > 0) {
    floatingCartTotal.innerText = formattedTotal;
    floatingCartContainer.classList.remove('hidden');
    setTimeout(() => {
      floatingCartContainer.classList.remove('translate-y-full');
    }, 10);
  } else {
    floatingCartContainer.classList.add('translate-y-full');
    setTimeout(() => {
      floatingCartContainer.classList.add('hidden');
    }, 300);
  }
}

export function openModal(modal) { modal.classList.add('visible'); }
export function closeModal(modal) { modal.classList.remove('visible'); }