import MainBlock from "./components/MainBlock/MainBlock";

(async () => {
  const mainBlock = new MainBlock();
  const mainBlockElem = await mainBlock.generateLayout();
  document.body.prepend(mainBlockElem);
})();
