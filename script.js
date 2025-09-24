// Ambil elemen wrapper utama aplikasi
const wrapper = document.querySelector(".wrapper");
// Ambil tombol menu hamburger
const menuBtn = document.querySelector(".menu-btn");
// Ambil tombol kembali di layar kategori
const backBtn = document.querySelector(".back-btn");

// Fungsi untuk toggle antara layar utama dan layar kategori
const toggleScreen = () => {
    // Toggle class "show-category" untuk mengatur transisi layar
    wrapper.classList.toggle("show-category");

};

// Event listener untuk tombol kembali
backBtn.addEventListener("click", toggleScreen);

// Event listener untuk tombol menu
menuBtn.addEventListener("click", toggleScreen);

// Ambil tombol floating untuk menambah tugas
const addTaskBtn = document.querySelector(".add-task-btn");
// Ambil form modal untuk menambah tugas
const addTaskForm = document.querySelector(".add-task");
// Ambil backdrop gelap untuk modal
const blackBackDrop = document.querySelector(".black-backdrop");

// Fungsi untuk toggle modal tambah tugas
const toggleAddTaskForm = () => {
    // Toggle class "active" pada form modal
    addTaskForm.classList.toggle("active");
    // Toggle class "active" pada backdrop gelap
    blackBackDrop.classList.toggle("active");
    // Toggle class "active" pada tombol tambah (untuk rotasi animasi)
    addTaskBtn.classList.toggle("active");
};

// Event listener untuk tombol tambah tugas
addTaskBtn.addEventListener("click", toggleAddTaskForm);
// Event listener untuk backdrop (tutup modal saat diklik backdrop)
blackBackDrop.addEventListener("click", toggleAddTaskForm);

// Array berisi data kategori tugas yang tersedia
let categories = [
  {
    title: "Personal", // Nama kategori
    img: "boy.png", // Icon/gambar kategori
  },
  {
    title: "Work",
    img: "briefcase.png",
  },
  {
    title: "Shopping",
    img: "shopping.png",
  },
  {
    title: "Coding",
    img: "web-design.png",
  },
  {
    title: "Health",
    img: "healthcare.png",
  },
  {
    title: "Fitness",
    img: "dumbbell.png",
  },
  {
    title: "Education",
    img: "education.png",
  },
  {
    title: "Finance",
    img: "saving.png",
  },
];

// Array berisi semua data tugas
let tasks = [
  {
    id: 1, // ID unik untuk setiap tugas
    task: "Go to market", // Deskripsi tugas
    category: "Shopping", // Kategori tugas
    completed: false, // Status penyelesaian tugas
  },
  {
    id: 2,
    task: "Read a chapter of a book",
    category: "Personal",
    completed: false,
  },
  {
    id: 3,
    task: "Prepare presentation for meeting",
    category: "Work",
    completed: false,
  },
  {
    id: 4,
    task: "Complete coding challenge",
    category: "Coding",
    completed: false,
  },
  {
    id: 5,
    task: "Take a 30-minute walk",
    category: "Health",
    completed: false,
  },
  {
    id: 6,
    task: "Do a 20-minute HIIT workout",
    category: "Fitness",
    completed: false,
  },
  {
    id: 7,
    task: "Watch an educational video online",
    category: "Education",
    completed: false,
  },
  {
    id: 8,
    task: "Review monthly budget",
    category: "Finance",
    completed: false,
  },
  {
    id: 9,
    task: "Buy groceries for the week",
    category: "Shopping",
    completed: false,
  },
  {
    id: 10,
    task: "Write in a journal",
    category: "Personal",
    completed: false,
  },
  {
    id: 11,
    task: "Send follow-up emails",
    category: "Work",
    completed: false,
  },
  {
    id: 12,
    task: "Work on a coding side project",
    category: "Coding",
    completed: false,
  },
  {
    id: 13,
    task: "Try a new healthy recipe",
    category: "Health",
    completed: false,
  },
  {
    id: 14,
    task: "Attend a yoga class",
    category: "Fitness",
    completed: false,
  },
  {
    id: 15,
    task: "Read an article about a new topic",
    category: "Education",
    completed: false,
  },
  {
    id: 16,
    task: "Set up automatic bill payments",
    category: "Finance",
    completed: false,
  },
  // Additional tasks for each category
  {
    id: 17,
    task: "Buy new clothes",
    category: "Shopping",
    completed: false,
  },
  {
    id: 18,
    task: "Meditate for 10 minutes",
    category: "Personal",
    completed: false,
  },
  {
    id: 19,
    task: "Prepare agenda for team meeting",
    category: "Work",
    completed: false,
  },
  {
    id: 20,
    task: "Debug a software issue",
    category: "Coding",
    completed: false,
  },
  {
    id: 21,
    task: "Try a new recipe for lunch",
    category: "Health",
    completed: false,
  },
  {
    id: 22,
    task: "Go for a run",
    category: "Fitness",
    completed: false,
  },
  {
    id: 23,
    task: "Learn a new language online",
    category: "Education",
    completed: false,
  },
  {
    id: 24,
    task: "Read about history",
    category: "Education",
    completed: false,
  },
  {
    id: 25,
    task: "Review investment portfolio",
    category: "Finance",
    completed: false,
  },
  // Add more tasks for each category as desired
];
// Variable untuk menyimpan kategori yang sedang dipilih/aktif
let selectedCategory = categories[0];

// Ambil elemen-elemen DOM yang diperlukan
const categoriesContainer = document.querySelector(".categories"); // Container untuk daftar kategori
const categoryTitle = document.querySelector(".category-title"); // Judul kategori di layar detail
const totalCategoryTask = document.querySelector(".category-task"); // Jumlah tugas dalam kategori
const categoryImg = document.querySelector("#category-img"); // Gambar kategori di layar detail
const totalTask = document.querySelector(".totalTask"); // Total semua tugas di halaman utama

// Fungsi untuk menghitung dan memperbarui total tugas
const calculateTotal = () => {
    // Filter tugas berdasarkan kategori yang sedang dipilih
    const categoryTask = tasks.filter((task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    // Update tampilan jumlah tugas dalam kategori
    totalCategoryTask.innerHTML = `${categoryTask.length} Task`;
    // Update tampilan total semua tugas
    totalTask.innerHTML = tasks.length; // Total dari semua kategori

};




// Fungsi untuk merender/menampilkan daftar kategori di layar utama
const renderCategories = () => {
    // Kosongkan container kategori terlebih dahulu
    categoriesContainer.innerHTML = "";
    // Loop melalui setiap kategori
    categories.forEach(category => {
        // Filter tugas berdasarkan kategori untuk menghitung jumlah
        const categoryTask = tasks.filter((task) => task.category.toLowerCase() === category.title.toLowerCase());

        // Buat elemen div untuk kategori
        const div = document.createElement("div");
        div.classList.add("category");
        // Tambah event listener untuk klik kategori
        div.addEventListener("click", () => {
            // Tampilkan layar kategori
            wrapper.classList.add("show-category");
            // Set kategori yang dipilih
            selectedCategory = category;
            // Update judul kategori
            categoryTitle.innerText = category.title;
            // Update gambar kategori
            categoryImg.src = `images/${category.img}`; 
            // Hitung ulang total tugas
            calculateTotal();
            // Render ulang daftar tugas
            renderTasks();
        });

        // Set HTML untuk kategori
        div.innerHTML = `
            <div class="left">
                            <img src="images/${category.img}" alt="${category.title}" >
                            <div class="content">
                                <h1>${category.title}</h1>
                                <p>${categoryTask.length} Tugas</p>
                            </div>
                        </div>
                        <div class="options">
                            <div class="toggle-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
        `;
        // Tambahkan kategori ke container
        categoriesContainer.appendChild(div);
    });
};
// Ambil container untuk daftar tugas
const tasksContainer = document.querySelector(".tasks");
// Fungsi untuk merender/menampilkan daftar tugas dalam kategori yang dipilih
const renderTasks = () => {
    // Kosongkan container tugas terlebih dahulu
    tasksContainer.innerHTML = "";
    // Filter tugas berdasarkan kategori yang sedang dipilih
    const categoryTask = tasks.filter((task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    // Jika tidak ada tugas dalam kategori
    if (categoryTask.length === 0) {
        // Tampilkan pesan "tidak ada tugas"
        tasksContainer.innerHTML = `<p class="no-task">Tidak ada tugas</p>`;
        return;
    } else {
        // Loop melalui setiap tugas dalam kategori
        categoryTask.forEach((task) => {
            // Buat wrapper untuk tugas
            const div = document.createElement("div");
            div.classList.add("task-wrapper");
            // Buat label untuk checkbox dan teks tugas
            const label = document.createElement("label");
            label.classList.add("task");
            label.setAttribute("for", task.id);
            // Buat checkbox
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = task.id;
            checkbox.checked = task.completed;

            // Event listener untuk perubahan status checkbox
            checkbox.addEventListener("change", () => {
                // Cari index tugas dalam array
                const index = tasks.findIndex((t) => t.id === task.id);

                // Toggle status completed
                tasks[index].completed = !tasks[index].completed;
                // Simpan ke localStorage
                saveLocal();
                // Perbarui total setelah toggle
                calculateTotal();
            });

            // Set HTML untuk tombol delete
            div.innerHTML = `<div class="delete">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                            </svg>
                        </div>`;
                        // Set HTML untuk label dan checkbox
                        label.innerHTML = `<span class="checkmark">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>
                            </span>
                            <p>${task.task}</p>`;
            // Sisipkan checkbox ke awal label
            label.prepend(checkbox);
            // Sisipkan label ke awal div
            div.prepend(label);
            // Tambahkan tugas ke container
            tasksContainer.appendChild(div);

            // Ambil tombol delete dan tambah event listener
            const deleteBtn = div.querySelector(".delete");
            deleteBtn.addEventListener("click", () => {
                // Cari index tugas dalam array
                const index = tasks.findIndex((t) => t.id === task.id);
                // Hapus tugas dari array
                tasks.splice(index, 1);
                // Simpan ke localStorage
                saveLocal();
                // Render ulang daftar tugas
                renderTasks();
                // Perbarui total setelah delete
                calculateTotal();
            });
        });

        // Render ulang kategori dan hitung total
        renderCategories();
        calculateTotal();
    }
};
// Fungsi untuk menyimpan data tugas ke localStorage
const saveLocal = () => {
    // Simpan array tasks dalam format JSON ke localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
// Fungsi untuk mengambil data tugas dari localStorage
const getLocal = () => {
    // Ambil data dari localStorage dan parse dari JSON
    const localTasks = JSON.parse(localStorage.getItem("tasks"));
    // Jika ada data, update array tasks
    if (localTasks) {
        tasks = localTasks;
    }
};
// Ambil elemen-elemen form untuk menambah tugas
const categorySelect = document.querySelector("#category-select"); // Dropdown pilihan kategori
const cancelBtn = document.querySelector(".cancel-btn"); // Tombol batal
const addBtn = document.querySelector(".add-btn"); // Tombol tambah
const taskInput = document.querySelector("#task-input"); // Input field untuk nama tugas

// Event listener untuk tombol batal
cancelBtn.addEventListener("click", toggleAddTaskForm);
// Event listener untuk tombol tambah tugas
addBtn.addEventListener("click", () => {
    // Ambil nilai dari input
    const task = taskInput.value;
    const category = categorySelect.value;

    // Validasi input tidak boleh kosong
    if (task === "" || category === "") {
        alert("Please enter a task");
        return;
    }else {
        // Buat object tugas baru
        const newTask = {
            id: tasks.length + 1, // Generate ID sederhana
            task,category, completed: false, // Set status awal belum selesai
        };
        // Tambahkan tugas baru ke array
        tasks.push(newTask);
        // Kosongkan input field
        taskInput.value = "";
        // Simpan ke localStorage
        saveLocal();
        // Tutup modal form
        toggleAddTaskForm();
        // Render ulang daftar tugas
        renderTasks();
        // Perbarui total setelah add
        calculateTotal();
    }
});
// Populate dropdown kategori dengan semua kategori yang tersedia
categories.forEach(category => {
    // Buat elemen option
    const option = document.createElement("option");
    option.value = category.title.toLowerCase(); // Set value ke lowercase
    option.textContent = category.title; // Set teks tampilan
    // Tambahkan option ke select
    categorySelect.appendChild(option);
});
// Inisialisasi aplikasi
getLocal(); // Ambil data dari localStorage
calculateTotal(); // Hitung total tugas
renderTasks(); // Render daftar tugas