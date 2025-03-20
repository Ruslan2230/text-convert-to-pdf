import axios from "axios";

const API_URL =
  "http://95.217.134.12:4010/create-pdf?apiKey=78684310-850d-427a-8432-4a6487f6dbc4";

export const convertTextToPdf = async (text) => {
  try {
    const response = await axios.post(API_URL, JSON.stringify({ text }), {
      headers: { "Content-Type": "application/json" },
      responseType: "blob",
    });
    const result = URL.createObjectURL(response.data);
    return result;
  } catch (error) {
    throw new Error("Не вдалося створити PDF");
  }
};