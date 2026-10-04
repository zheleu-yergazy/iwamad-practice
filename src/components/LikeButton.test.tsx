import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from "vitest";
import { LikesProvider } from "../context/LikesContext";
import LikeButton from "./LikeButton";

test("LikeButton changes text after click", () => {
  render(
    <LikesProvider>
      <LikeButton />
    </LikesProvider>,
  );

  const button = screen.getByRole("button");

  expect(button.textContent).toBe("♡ Like");

  fireEvent.click(button);

  expect(button.textContent).toBe("♥ Liked");
});