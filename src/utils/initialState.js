export const initialState = {
  destination: localStorage.getItem("destination") || "",
  dates: JSON.parse(localStorage.getItem("dates")) || [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ],
  options: JSON.parse(localStorage.getItem("options")) || {
    adults: 1,
    children: 0,
    rooms: 1,
  },
  minPrice: Number(localStorage.getItem("minPrice")) || 0,
  maxPrice: Number(localStorage.getItem("maxPrice")) || 30000,
  isLoading: false,
  error: false,
};

// ###############################################################################

export function storeInitialStateInLocalStorage() {
  for (const [key, value] of Object.entries(initialState)) {
    if (typeof value === "object") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value.toString());
    }
  }
}

// ###############################################################################
