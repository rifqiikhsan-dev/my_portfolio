import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Contact } from "./Contact";

describe("Contact Form", () => {
  it("should show alert when fields are empty", () => {
    const alertMock = vi.fn();
    window.alert = alertMock;

    render(<Contact />);
    const button = screen.getByRole("button", { name: /send/i });
    fireEvent.click(button);

    expect(alertMock).toHaveBeenCalledWith("Please fill in all fields.");
  });

  it("should open WhatsApp when form is complete", () => {
    const openMock = vi.fn();
    window.open = openMock;

    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText(/name/i), {
      target: { value: "Rifqi" }
    });
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "rifqi@example.com" }
    });
    fireEvent.change(screen.getByPlaceholderText(/phone number/i), {
      target: { value: "089629814773" }
    });
    fireEvent.change(screen.getByPlaceholderText(/timeline/i), {
      target: { value: "2 weeks" }
    });
    fireEvent.change(screen.getByPlaceholderText(/project details/i), {
      target: { value: "Membuat aplikasi portfolio" }
    });

    fireEvent.change(screen.getByTestId("service-select"), {
      target: { value: "web-development" }
    });

    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    expect(openMock).toHaveBeenCalled();
  });
});
