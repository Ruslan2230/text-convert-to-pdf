import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { PdfProvider } from "../context/PdfContext";
import { convertTextToPdf } from "../services/pdfService";

jest.mock("../services/pdfService", () => ({
  convertTextToPdf: jest.fn(),
}));

describe("App component", () => {
  const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("converts the entered text into PDF", async () => {
    convertTextToPdf.mockResolvedValue("http://example.com/test.pdf");

    render(
      <PdfProvider>
        <App />
      </PdfProvider>
    );

    const textarea = screen.getByRole("textbox");
    const button = screen.getByText("Convert to PDF");

    fireEvent.change(textarea, { target: { value: "Test text" } });
    fireEvent.click(button);

    expect(convertTextToPdf).toHaveBeenCalledWith("Test text");
    expect(await screen.findByText("Conversion History")).toBeInTheDocument();
  });

  it("displays an error if the API fails", async () => {
    convertTextToPdf.mockRejectedValue(new Error("Request Error"));

    render(
      <PdfProvider>
        <App />
      </PdfProvider>
    );

    const textarea = screen.getByRole("textbox");
    const button = screen.getByText("Convert to PDF");

    fireEvent.change(textarea, { target: { value: "Test text" } });
    fireEvent.click(button);

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(mockAlert).toHaveBeenCalledWith("Request Error");
  });
});
