import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: null,
    username: null,
    email: null,
    listAnggota: [],
    listKegiatan: []
  });
  // tidak gunakan null lagi → aman di render

  // REGISTER USER
  const registerUser = ({ username, email, password }) => {
    setUser({
      id: "USR-" + Date.now(),
      username,
      email,
      listAnggota: [],
      listKegiatan: []
    });

    console.log("Register success");
  };

  // LOGIN USER
  const loginUser = ({ email }) => {
    setUser((prev) => ({
      ...prev,
      email, // update email, tapi field lain tetap ada
    }));

    console.log("Login success");
  };

  // TAMBAH UKM ANGGOTA
  const addAnggota = (namaUKM) => {
    setUser((prev) => ({
      ...prev,
      listAnggota: [...prev.listAnggota, namaUKM],
    }));
  };

  // TAMBAH KEGIATAN
  const addKegiatan = (namaKegiatan) => {
    setUser((prev) => ({
      ...prev,
      listKegiatan: [...prev.listKegiatan, namaKegiatan],
    }));
  };

  return (
    <UserContext.Provider
      value={{ user, registerUser, loginUser, addAnggota, addKegiatan }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
