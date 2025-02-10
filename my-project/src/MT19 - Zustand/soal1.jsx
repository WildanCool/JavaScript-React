import { create } from "zustand";

const useCafeStore = create((set) => ({
  count: 0,
  tambah: () => set((state) => ({ count: state.count + 1 })),
  kurang: () =>
    set((state) => {
      if (state.count > 0) {
        return { count: state.count - 1 };
      } else {
        alert("Jumlah pelanggan tidak bisa kurang dari 0!");
        return state;
      }
    }),
}));

const CustomerCount = () => {
  const { count, tambah, kurang } = useCafeStore();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={tambah}>Tambah Pelanggan</button>
      <button onClick={kurang}>Kurang Pelanggan</button>
    </div>
  );
};

export default CustomerCount;