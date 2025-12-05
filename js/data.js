// js/data.js
// File ini hanya berisi data menu.
// 'export' digunakan agar variabel ini bisa diakses dari file lain.

export const allMenuData = [
    // Makanan
    {
        id: 'spesial-ayam',
        name: 'Paket Spesial I Ayam',
        price: 50000,
        category: 'Spesial',
        group: 'Paket Spesial I',
        note:'Pemesanan H-1',
        image: 'images/makanan/spesial-1.jpg',
        desc: 'Nasi dengan lauk, sambal khas, lalapan segar, Kerupuk, jeruk, dan air mineral 220ml'
        
    },
    {
        id: 'spesial-bebek',
        name: 'Paket Spesial I Bebek',
        price: 48000,
        category: 'Spesial',
        group: 'Paket Spesial I',
        note:'Pemesanan H-1',
        image: 'images/makanan/spesial-1.jpg',
        desc: 'Nasi dengan lauk, sambal khas, lalapan segar, Kerupuk, jeruk, dan air mineral 220ml'
        
    },
    {
        id: 'spesial-gurame',
        name: 'Paket Spesial I Gurame',
        price: 45000,
        category: 'Spesial',
        group: 'Paket Spesial I',
        note:'Pemesanan H-1',
        image: 'images/makanan/spesial-1.jpg',
        desc: 'Nasi dengan lauk, sambal khas, lalapan segar, Kerupuk, jeruk, dan air mineral 220ml'
        
    },
    {
        id: 'spesial-lele',
        name: 'Paket Spesial I Lele',
        price: 34000,
        category: 'Spesial',
        group: 'Paket Spesial I',
        note:'Pemesanan H-1',
        image: 'images/makanan/spesial-1.jpg',
        desc: 'Nasi dengan lauk, sambal khas, lalapan segar, Kerupuk, jeruk, dan air mineral 220ml'
        
    },
    {
        id: 'spesial-2-ayam',
        name: 'Paket Spesial II Ayam',
        price: 42000,
        category: 'Spesial',
        group: 'Paket Spesial II',
        note:'Pemesanan H-1',
        image: 'images/makanan/spesial-2.jpg',
        desc: 'Nasi dengan lauk, sambal khas, lalapan segar, Kerupuk, jeruk, dan teh kotak'
        
    },
    {
        id: 'spesial-2-bebek',
        name: 'Paket Spesial II Bebek',
        price: 48000,
        category: 'Spesial',
        group: 'Paket Spesial II',
        note:'Pemesanan H-1',
        image: 'images/makanan/spesial-2.jpg',
        desc: 'Nasi dengan lauk, sambal khas, lalapan segar, Kerupuk, jeruk, dan teh kotak'
        
    },
    {
        id: 'spesial-2-gurame',
        name: 'Paket Spesial II Gurame',
        price: 47000,
        category: 'Spesial',
        group: 'Paket Spesial II',
        note:'Pemesanan H-1',
        image: 'images/makanan/spesial-2.jpg',
        desc: 'Nasi dengan lauk, sambal khas, lalapan segar, Kerupuk, jeruk, dan teh kotak'
        
    },
    {
        id: 'spesial-2-lele',
        name: 'Paket Spesial II Lele',
        price: 36000,
        category: 'Spesial',
        group: 'Paket Spesial II',
        note:'Pemesanan H-1',
        image: 'images/makanan/spesial-2.jpg',
        desc: 'Nasi dengan lauk, sambal khas, lalapan segar, Kerupuk, jeruk, dan teh kotak'
        
    },
    { 
        id: 'paket-ayam-paha', 
        name: 'Paket Ayam Penyet (Paha)', 
        price: 34000, 
        category: 'Paket', 
        group: 'Paket Ayam Penyet', 
        isRecommended: true,
        image: 'images/makanan/PAP.png', 
        desc: 'Nasi dengan ayam penyet paha, sambal khas, dan lalapan segar.' 
        
    },
    { 
        id: 'paket-ayam-dada', 
        name: 'Paket Ayam Penyet (Dada)', 
        price: 34000, 
        category: 'Paket', 
        group: 'Paket Ayam Penyet', 
        isRecommended: true,
        image: 'images/makanan/PAP.png', 
        desc: 'Nasi dengan ayam penyet dada, sambal khas, dan lalapan segar.' 
        
    },
    { 
        id: 'paket-bebek-paha', 
        name: 'Paket Bebek Penyet (Paha)',
        price: 43000, 
        category: 'Paket', 
        group: 'Paket Bebek Penyet', 
        isRecommended: true,
        image: 'images/makanan/PBP.jpg', 
        desc: 'Nasi dengan bebek penyet paha, sambal khas, dan lalapan segar.' 
        
    },
    { 
        id: 'paket-bebek-dada', 
        name: 'Paket Bebek Penyet (Dada)',
        price: 43000, 
        category: 'Paket', 
        group: 'Paket Bebek Penyet', 
        isRecommended: true,
        image: 'images/makanan/PBP.jpg', 
        desc: 'Nasi dengan bebek penyet dada, sambal khas, dan lalapan segar.' 
        
    },
    { 
        id: 'paket-lele', 
        name: 'Paket Lele', 
        price: 29000, 
        category: 'Paket', 
        isRecommended: true,
        image: 'images/makanan/PPL.png', 
        desc: 'Nasi dengan lele goreng renyah, sambal, dan lalapan.' 
        
    },
    { 
        id: 'paket-gurame', 
        name: 'Paket Gurame', 
        price: 39000, 
        category: 'Paket', 
        isRecommended: true,
        image: 'images/makanan/PGG.jpg', 
        desc: 'Nasi dengan gurame goreng, sambal, dan lalapan.' 
        
    },
    { 
        id: 'mie-goreng-ayam', 
        name: 'Mie Goreng (Ayam)', 
        price: 31000, 
        category: 'Mie Jogja', 
        group: 'Mie Goreng Spesial', 
        image: 'images/makanan/migor.jpg',
        desc: 'Mie goreng lezat dengan suwiran ayam dan sayuran.' 
        
    },
    { 
        id: 'mie-goreng-sapi', 
        name: 'Mie Goreng (Sapi)', 
        price: 36000, 
        category: 'Mie Jogja', 
        group: 'Mie Goreng Spesial', 
        image: 'images/makanan/migor.jpg',
        desc: 'Mie goreng lezat dengan irisan daging sapi dan sayuran.' 
        
    },
    { 
        id: 'migor-ATB', 
        name: 'Mie Goreng (Ayam+Telur Bebek)', 
        price: 37000, 
        category: 'Mie Jogja', 
        group: 'Mie Goreng Spesial', 
        image: 'images/makanan/migor.jpg',
        desc: 'Mie goreng lezat dengan irisan daging sapi dan sayuran.' 
        
    },
    { 
        id: 'migor-DSTB', 
        name: 'Mie Goreng (Sapi+Telur Bebek)', 
        price: 37000, 
        category: 'Mie Jogja', 
        group: 'Mie Goreng Spesial', 
        image: 'images/makanan/migor.jpg',
        desc: 'Mie goreng lezat dengan irisan daging sapi dan sayuran.' 
        
    },
    { 
        id: 'mie-godhog-ayam', 
        name: 'Mie Godhog (Ayam)', 
        price: 31000, 
        category: 'Mie Jogja', 
        group: 'Mie Godhog Spesial', 
        image: 'images/makanan/midog.jpg',
        desc: 'Mie Kuah lezat dengan suwiran ayam dan sayuran.' 
        
    },
    { 
        id: 'mie-godhog-sapi', 
        name: 'Mie Godhog (Sapi)', 
        price: 36000, 
        category: 'Mie Jogja', 
        group: 'Mie Godhog Spesial', 
        image: 'images/makanan/midog.jpg',
        desc: 'Mie Kuah lezat dengan irisan daging sapi dan sayuran.' 
        
    },
    { 
        id: 'midog-ATB', 
        name: 'Mie Godhog (Telur Bebek)',
        price: 37000, 
        category: 'Mie Jogja', 
        group: 'Mie Godhog Spesial', 
        image: 'images/makanan/midog.jpg',
        desc: 'Mie kuah lezat dengan irisan daging sapi dan sayuran.' 
        
    },
    { 
        id: 'midog-DSTB', 
        name: 'Mie Godhog (Sapi+Telur Bebek)', 
        price: 37000, 
        category: 'Mie Jogja', 
        group: 'Mie Godhog Spesial', 
        image: 'images/makanan/midog.jpg',
        desc: 'Mie kuah lezat dengan irisan daging sapi dan sayuran.' 
        
    },
    { 
        id: 'Bihun-goreng-ayam', 
        name: 'Bihun Goreng (Ayam)', 
        price: 31000, 
        category: 'Mie Jogja', 
        group: 'Bihun Goreng Spesial',
        image: 'images/makanan/bigor.jpg',
        desc: 'Bihun goreng lezat dengan suwiran ayam dan sayuran.' 
        
    },
    { 
        id: 'bihun-goreng-sapi', 
        name: 'Bihun Goreng (Sapi)', 
        price: 36000, 
        category: 'Mie Jogja', 
        group: 'Bihun Goreng Spesial',
        image: 'images/makanan/bigor.jpg',
        desc: 'Bihun goreng lezat dengan irisan daging sapi dan sayuran.' 
        
    },
    { 
        id: 'bigor-ATB', 
        name: 'Bihun Goreng (Ayam+Telur Bebek)', 
        price: 37000, 
        category: 'Mie Jogja', 
        group: 'Bihun Goreng Spesial',
        image: 'images/makanan/bigor.jpg',
        desc: 'Bihun goreng lezat dengan irisan daging sapi dan sayuran.' 
        
    },
    { 
        id: 'bigor-DSTB',
        name: 'Bihun Goreng (Sapi+Telur Bebek)',
        price: 37000, 
        category: 'Mie Jogja', 
        group: 'Bihun Goreng Spesial',
        image: 'images/makanan/bigor.jpg',
        desc: ' Bihun goreng lezat dengan irisan daging sapi dan sayuran.' 
        
    },
    { 
        id: 'bihun-godhog-ayam', 
        name: 'Bihun Godhog (Ayam)',
        price: 31000, 
        category: 'Mie Jogja',
        group: 'Bihun Godhog Spesial',
        image: 'images/makanan/bidog.jpg',
        desc: 'Bihun Kuah lezat dengan suwiran ayam dan sayuran.'
        
    },
    { 
        id: 'bidog-sapi', 
        name: 'Bihun Godhog (Sapi)', 
        price: 36000, 
        category: 'Mie Jogja', 
        group: 'Bihun Godhog Spesial',
        image: 'images/makanan/bidog.jpg',
        desc: 'Bihun Kuah lezat dengan irisan daging sapi dan sayuran.' 
        
    },
    { 
        id: 'Bidog-ATB', 
        name:'Bihun Godhog (Telur Bebek)',
        price: 37000, 
        category: 'Mie Jogja', 
        group: 'Bihun Godhog Spesial',
        image: 'images/makanan/bidog.jpg',
        desc: 'Bihun kuah lezat dengan irisan daging sapi dan sayuran.' 
        
    },
    { 
        id: 'bidog-DSTB', 
        name: 'Bihun Godhog (Sapi+Telur Bebek)', 
        price: 37000, 
        category: 'Mie Jogja', 
        group: 'Bihun Godhog Spesial',
        image: 'images/makanan/bidog.jpg',
        desc: 'Bihun kuah lezat dengan irisan daging sapi dan sayuran.' 
        
    },
    { 
        id: 'nasgor-ayam', 
        name: 'Nasi Goreng (Ayam)', 
        price: 31000, 
        category: 'Mie Jogja', 
        group: 'Nasi Goreng Spesial',
        image:'images/makanan/nasgor.jpg',
        desc: 'Nasi Goreng lezat dengan suwiran ayam dan sayuran.' 
        
    },
    { 
        id: 'nasgor-sapi', 
        name: 'Nasi Goreng (Sapi)', 
        price: 36000, 
        category: 'Mie Jogja', 
        group: 'Nasi Goreng Spesial',
        image:'images/makanan/nasgor.jpg',
        desc: 'Nasi Goreng lezat dengan irisan daging sapi dan sayuran.' 
        
    },
    { 
        id: 'Nasgor-ATB', 
        name: 'Nasgor (Telur Bebek)',
        price: 37000, 
        category: 'Mie Jogja', 
        group: 'Nasi Goreng Spesial',
        image:'images/makanan/nasgor.jpg',
        desc: 'Nasi Goreng lezat dengan irisan daging sapi dan sayuran.' 
        
    },
    { 
        id: 'Nasgor-DSTB', 
        name: 'Nasi Goreng (Sapi+Telur Bebek)', 
        price: 37000, 
        category: 'Mie Jogja', 
        group: 'Nasi Goreng Spesial',
        image:'images/makanan/nasgor.jpg',
        desc: 'Nasi Goreng lezat dengan irisan daging sapi dan sayuran.' 
        
    },
    { 
        id: 'ayam-goreng-paha', 
        name: 'Ayam Goreng(Paha)', 
        price: 27000, 
        category: 'Satuan', 
        group: 'Ayam Goreng (satuan)',
        image: 'images/makanan/AP.jpg',
        desc: 'Ayam goreng, cocok untuk lauk.' 
        
    },
    { 
        id: 'ayam-goreng-Dada', 
        name: 'Ayam Goreng (Dada)', 
        price: 27000, 
        category: 'Satuan', 
        group: 'Ayam Goreng (satuan)',
        image: 'images/makanan/AP.jpg',
        desc: 'Ayam goreng, cocok untuk lauk.' 
        
    },
    { 
        id: 'Bebek-goreng-paha', 
        name: 'Bebek Goreng(Paha)', 
        price: 35000, 
        category: 'Satuan', 
        group: 'Bebek Goreng (satuan)',
        image: 'images/makanan/BP.jpg',
        desc: 'Bebek goreng, cocok untuk lauk.' 
        
    },
    { 
        id: 'Bebek-goreng-Dada', 
        name: 'Bebek Goreng (Dada)', 
        price: 35000, 
        category: 'Satuan', 
        group: 'Bebek Goreng (satuan)',
        image: 'images/makanan/BP.jpg',
        desc: 'Bebek goreng, cocok untuk lauk.' 
        
    },
    { 
        id: 'lele-goreng', 
        name: 'Lele Goreng (Satuan)',
        price: 20000, 
        category: 'Satuan', 
        image: 'images/makanan/LP.jpg',
        desc: 'Lele goreng renyah satuan.' 
        
    },
    { 
        id: 'Gurame-goreng', 
        name: 'Gurame Goreng (Satuan)',
        price: 20000, 
        category: 'Satuan', 
        image: 'images/makanan/GP.jpg',
        desc: 'Gurame goreng renyah.' 
        
    },
    //Lauk & Sayur
    { 
        id: 'Balado-terong', 
        name: 'Balado Terong', 
        price: 14000, 
        category: 'Lauk & Sayur', 
        image:'images/sayuran/Terong.jpg',
        desc: 'Balado Terong Lezat, cocok untuk lauk.' 
        
    },
    { 
        id: 'Tumis-Kangkung', 
        name: 'Tumis Kangkung', 
        price: 16000, 
        category: 'Lauk & Sayur', 
        image: 'images/sayuran/kangkung.jpg', 
        desc: 'Tumisan Lezat, cocok untuk lauk.' 
        
    },
    { 
        id: 'Cah-brokoli', 
        name: 'Cah Brokoli', 
        price: 18000, 
        category: 'Lauk & Sayur', 
        image: 'images/sayuran/brokoli.jpg', 
        desc: 'Tumisan Lezat, cocok untuk lauk.' 
        
    },
    { 
        id: 'tahu-goreng', 
        name: 'Tahu Goreng', 
        price: 13000, 
        category: 'Gorengan', 
        group: 'Tahu', 
        image: 'images/gorengan/tahu.png',
        desc: 'Gorengan Lezat, cocok untuk lauk.' 
        
    },
    { 
        id: 'tahu-penyet', 
        name: 'Tahu Penyet', 
        price: 16000, 
        category: 'Gorengan', 
        group: 'Tahu', 
        image: 'images/gorengan/tahu.png',
        desc: 'Gorengan Lezat, cocok untuk lauk.' 
        
    },
    { 
        id: 'tempe-penyet', 
        name: 'Tempe Penyet', 
        price: 16000, 
        category: 'Gorengan', 
        group: 'Tempe', 
        image:'images/gorengan/tempe.jpg',
        desc: 'Gorengan Lezat, cocok untuk lauk.' 
        
    },
    { 
        id: 'tempe-goreng', 
        name: 'Tempe Goreng', 
        price: 13000, 
        category: 'Gorengan', 
        group: 'Tempe', 
        image:'images/gorengan/tempe.jpg',
        desc: 'Gorengan Lezat, cocok untuk lauk.' 
        
    },
    { 
        id: 'Mendoan', 
        name: 'Tempe Mendoan(2pcs)', 
        price: 7000, 
        category: 'Gorengan', 
        image: 'images/gorengan/mendoan.jpg', 
        desc: 'Gorengan Lezat, cocok untuk lauk.' 
        
    },
    { 
        id: 'Kol-goreng', 
        name: 'Kol Goreng', 
        price: 7000, 
        category: 'Gorengan', 
        image: 'images/gorengan/kol.png',
        desc: 'Sayur Goreng Lezat, cocok untuk lauk.' 
        
    },
    { 
        id: 'udang-goreng-tepung', 
        name: 'Udang Goreng Tepung', 
        price: 36000, 
        category: 'Lauk & Sayur', 
        group: 'Udang', 
        image: 'images/sayuran/udang.jpg',
        desc: 'Udang Goreng Yang renyah, cocok untuk lauk' 
        
    },
    { 
        id: 'Udang-balado', 
        name: 'Udang Balado', 
        price: 36000, 
        category: 'Lauk & Sayur', 
        group: 'Udang', 
        image: 'images/sayuran/udang.jpg',
        desc: 'Udang Balado dengan bumbu khas yang nikmat.' 
        
    },
    { 
        id: 'cumi-goreng-tepung', 
        name: 'Cumi Goreng Tepung', 
        price: 36000, 
        category: 'Lauk & Sayur', 
        group: 'Cumi', 
        image: 'images/sayuran/cumi.jpg',
        desc: 'Cumi Goreng Yang renyah, cocok untuk lauk' 
        
    },
    { 
        id: 'Cumi-balado', 
        name: 'Cumi Balado', 
        price: 36000, 
        category: 'Lauk & Sayur', 
        group: 'Cumi', 
        image: 'images/sayuran/cumi.jpg',
        desc: 'Cumi Balado dengan bumbu khas yang nikmat.' 
        
    },
    { 
        id: 'Capcay-biasa', 
        name: 'Capcay Biasa', 
        price: 18000, 
        category: 'Lauk & Sayur', 
        group: 'Capcay', 
        image:'images/sayuran/capcay.jpg',
        desc: 'Capcay nikmat dengan paduan banyak sayuran' 
        
    },
    { 
        id: 'Capcay-Seafood', 
        name: 'Capcay Seafood', 
        price: 27000, 
        category: 'Lauk & Sayur', 
        group: 'Capcay', 
        image:'images/sayuran/capcay.jpg',
        desc: 'Capcay nikmat dengan paduan banyak sayuran & Seafood' 
        
    },
    // Minuman
    { 
        id: 'es-teh', 
        name: 'Es Teh Manis', 
        price: 8000, 
        category: 'Minuman', 
        image: 'images/minuman/tehmanis.jpg', 
        desc: 'Teh manis dingin yang menyegarkan.' 
        
    },
    { 
        id: 'es-lemon-tea', 
        name: 'Es Lemon Tea', 
        price: 16000, 
        category: 'Minuman', 
        image: 'images/minuman/lemon.png',
        desc: 'Lemon Tea dingin yang menyegarkan.' 
        
    },
    { 
        id: 'es-jeruk', 
        name: 'Es Jeruk', 
        price: 16000, 
        category: 'Minuman', 
        image: 'images/minuman/jeruk.jpg',
        desc: 'Es jeruk peras asli, kaya vitamin C.' 
        
    },
    { 
        id: 'LBL', 
        name: 'Lidah Buaya Lemon', 
        price: 18000, 
        category: 'Minuman', 
        group: 'Lidah Buaya', 
        image: 'images/minuman/LBL.png',
        desc: 'Minuman khas Pontianak ' 
        
    },
    { 
        id: 'LBC', 
        name: 'Lidah Buaya Cocopandan',
        price: 18000, 
        category: 'Minuman', 
        group: 'Lidah Buaya', 
        image: 'images/minuman/LBL.png',
        desc: 'Minuman khas Pontianak ' 
        
    },
    { 
        id: 'jus-alpukat', 
        name: 'Jus Alpukat', 
        price: 19000, 
        category: 'Minuman', 
        group: 'Jus Segar', 
        image: 'images/minuman/jus.png', 
        desc: 'Jus Segar dengan beberapa pilihan.' 
        
    },
    { 
        id: 'jus-Melon', 
        name: 'Jus Melon', 
        price: 19000, 
        group: 'Jus Segar', 
        category: 'Minuman', 
        image: 'images/minuman/jus.png', desc: 'Jus Melon Segar yang nikmat.' 
        
    },
    { 
        id: 'jus-Mangga', 
        name: 'Jus Mangga', 
        price: 19000, 
        category: 'Minuman', 
        group: 'Jus Segar', 
        image: 'images/minuman/jus.png', 
        desc: 'Jus Mangga Segar yang nikmat.' 
        
    },
    { 
        id: 'jus-Strawbery', 
        name: 'Jus Strawberry', 
        price: 19000, 
        category: 'Minuman', 
        group: 'Jus Segar', 
        image: 'images/minuman/jus.png', 
        desc: 'Jus Mangga Segar yang nikmat.' 
        
    },
    { 
        id: 'Red-velvet', 
        name: 'Red Velvet', 
        price: 20000, 
        category: 'Minuman', 
        group: 'Susu Rasa', 
        image: 'images/minuman/susu.png', 
        desc: 'Minuman Susu Rasa Buah Bit.' 
        
    },
    { 
        id: 'Taro', 
        name: 'Taro', 
        price: 20000, 
        category: 'Minuman', 
        group: 'Susu Rasa', 
        image: 'images/minuman/susu.png', 
        desc: 'Minuman Susu Rasa Taro.' 
        
    },
    { 
        id: 'Matcha', 
        name: 'Matcha', 
        price: 20000, 
        category: 'Minuman', 
        group: 'Susu Rasa', 
        image: 'images/minuman/susu.png', 
        desc: 'Minuman Susu Rasa Matcha.'
        
    },
    { 
        id: 'es-campur', 
        name: 'Es Campur', 
        price: 21000, 
        category: 'Minuman', 
        image: 'images/minuman/esc.jpg', 
        desc: 'Es Campur Segar yang nikmat.' 
        
    },
    { 
        id: 'teh-tarik', 
        name: 'Teh Tarik', 
        price: 16000, 
        category: 'Minuman', 
        image: 'images/minuman/tarik.png',
        desc: 'Perpaduan antara teh yang nikmat dan susu kental manis.' 
        
    },
    { 
        id: 'soda-gembira', 
        name: 'Soda Gembira', 
        price: 21000, 
        category: 'Minuman', 
        image: 'images/minuman/sogem.jpg',
        desc: 'Paduan Soda dengan Susu dan sirup cocopandan.' 
        
    },
    { 
        id: 'brown-sugar', 
        name: 'Brown Sugar', 
        price: 16000, 
        category: 'Minuman', 
        image: 'images/minuman/brown.png',
        desc: 'Susu gula aren asli.' 
        
    },
    { 
        id: 'air-mineral', 
        name: 'Air Mineral', 
        price: 7000, 
        category: 'Minuman', 
        image: 'images/minuman/mineral.png', 
        desc: 'Air mineral kemasan botol 600ml.' 
        
    },
];
