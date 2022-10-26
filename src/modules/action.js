import PopUp from "./popup.js";

export default class Action {
  static comment() {
    const btn = document.querySelector(".comment-btn");
    btn.addEventListener("click", () => {
      PopUp.commentPop();
    });
  }
  static reservate() {
    const btn = document.querySelector(".reservate-btn");
    btn.addEventListener("click", () => {
      PopUp.reservatePop();
    });
  }
}