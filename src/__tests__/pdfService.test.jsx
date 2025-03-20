import { convertTextToPdf } from "../services/pdfService";
import axios from "axios";

jest.mock("axios");

describe("convertTextToPdf", () => {
  beforeEach(() => {
    global.URL = {
      createObjectURL: jest.fn(() => "mocked-blob-url"),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
    delete global.URL;
  });

  it("should make a request and return the PDF URL", async () => {
    const mockBlob = new Blob(["test"], { type: "application/pdf" });
    axios.post.mockResolvedValue({ data: mockBlob });

    const result = await convertTextToPdf("Test text");

    console.log("axios.post mock called:", axios.post.mock.calls);
    console.log(
      "URL.createObjectURL called with:",
      global.URL.createObjectURL.mock.calls
    );

    expect(axios.post).toHaveBeenCalledWith(
      "http://95.217.134.12:4010/create-pdf?apiKey=78684310-850d-427a-8432-4a6487f6dbc4",
      JSON.stringify({ text: "Test text" }),
      {
        headers: { "Content-Type": "application/json" },
        responseType: "blob",
      }
    );
    expect(global.URL.createObjectURL).toHaveBeenCalledWith(mockBlob);
    expect(result).toBe("mocked-blob-url");
  });

  it("should throw an error if the request fails", async () => {
    axios.post.mockRejectedValue(new Error("Internal Server Error"));

    await expect(convertTextToPdf("Test text")).rejects.toThrow(
      "Failed to create PDF"
    );
  });
});
