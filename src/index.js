import anime from "./assets/anime.png";
import bacco from "./assets/bacco.png";
import laptop from "./assets/laptop.png";
export const projects = [
    {
      title: "Laptop Store",
      image: laptop,
      description:
        "Platform e-commerce modern untuk penjualan laptop, dibangun dengan arsitektur Spring Boot. Aplikasi ini mencakup fitur lengkap seperti autentikasi pengguna, manajemen produk, keranjang belanja, filter pencarian dinamis, dan integrasi sistem pembayaran. Desain antarmuka yang responsif dan intuitif memastikan pengalaman belanja yang cepat, aman, dan nyaman di berbagai perangkat.",
      tech: [
        "Spring Boot",
        "Thymeleaf",
        "Bootstrap 5",
        "MySQL",
        "JPA/Hibernate",
      ],
      github: "https://github.com/Roxilius/fajri_roxilius_store",
      visit: "",
    },
    {
      title: "Streaming Anime",
      image: anime,
      description:
        "Aplikasi streaming anime berbasis web dengan antarmuka interaktif dan animasi halus menggunakan React. Dilengkapi fitur pencarian, navigasi kategori, dan desain yang ringan serta responsif untuk memberikan pengalaman menonton optimal di berbagai perangkat.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "TypeScript", "Vite"],
      github: "https://github.com/Roxilius/anime-fe",
      visit: "https://roxilius-anime.vercel.app",
    },
    {
      title: "Bacco Store",
      image: bacco,
      description:
        "Aplikasi toko sederhana berbasis terminal yang dikembangkan menggunakan bahasa C. Menyediakan fitur manajemen produk, pencatatan transaksi, serta sistem navigasi menu berbasis teks yang efisien untuk simulasi sistem toko secara offline.",
      tech: ["C Language", "Command-Line Interface (CLI)", "File Handling"],
      github: "https://github.com/Roxilius/Projeck-C",
      visit: "",
    },
  ];
  