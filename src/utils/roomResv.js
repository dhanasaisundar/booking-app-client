import { resvRoomUrl } from "./url";

export async function roomResv(roomId, dates) {
  const url = `${resvRoomUrl}/update-room/${roomId}`;
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ dates }),
  };

  try {
    const response = await fetch(url, options);
    return response;
  } catch (error) {
    console.error("Error in roomResv:", error);
    return { error: error.message, success: false };
  }
}
