/**
 * menu page
 */
let menu = [
  {
    id: 0,
    name: "Paket 1",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 10000,
  },
  {
    id: 1,
    name: "Paket 2",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 20000,
  },
  {
    id: 2,
    name: "Paket 3",
    desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
    price: 30000,
  },
];

// add menu card
const menuSection = document.querySelector(".menu-section");
let card = ``;

menu.map((data) => {
  card += kartu(data.name, data.desc, data.price, data.count, data.id);
  menuSection.innerHTML = card;
});

function kartu(name, desc, price, count, id) {
  return `<!-- card -->
	<div class="card">
		<button class="kategori" aria-readonly="true">Paket</button>
		<hr class="line" />
		<div class="container-content">
			<div>
				<img
					src="./images/example-product/indomie.jpg"
					alt=""
					class="produk-img"
				/>
			</div>
			<div class="content">
				<p>${name}</p>
				<p>${desc}</p>
				<p>${price}</p>
				<div class="content2">
					<button class="tambah" id="pesan${id}">pesan</button>
				</div>
			</div>
		</div>
	</div>`;
}

// add count
menu.map((data) => {
  const pesan = document.getElementById(`pesan${data.id}`);
  pesan.addEventListener("click", function (event) {
    event.preventDefault();
    const jumlah = prompt("masukan jumlah pesanan");
    const total = data.price * jumlah; // Hitung subtotal hanya untuk item saat ini
    let totalPrice = 0;
    localStorage.setItem("total", total);
    window.location.href = "order.html";
    localStorage.setItem("nama", data.nama);
    localStorage.setItem("pesanan", data.desc);
  });
});
const pesan = () => {};
