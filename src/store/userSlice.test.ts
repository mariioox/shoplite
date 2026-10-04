import { describe, it, expect } from "vitest";
import userReducer, { login, logout } from "./userSlice";

describe("userSlice", () => {
  it("starts logged out", () => {
    const state = userReducer(undefined, { type: "user/init" });
    expect(state.isLoggedIn).toBe(false);
    expect(state.name).toBe("");
  });

  it("logs the user in with their name", () => {
    const state = userReducer(undefined, login("Ada"));
    expect(state.isLoggedIn).toBe(true);
    expect(state.name).toBe("Adam");
  });

  it("logs the user out and clears the name", () => {
    const loggedIn = userReducer(undefined, login("Ada"));
    const state = userReducer(loggedIn, logout());
    expect(state.isLoggedIn).toBe(false);
    expect(state.name).toBe("");
  });
});