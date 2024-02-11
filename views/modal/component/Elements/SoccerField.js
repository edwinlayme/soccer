const createSoccerField = () => {
    const htmlTemplate = `<div class="soccer-field">
    <div class="goalpost left"></div>
    <div class="goalpost right"></div>
    <div class="center-circle"></div>
    <div class="penalty-box left"></div>
    <div class="penalty-box right"></div>
    <img width="48" height="48" src="https://img.icons8.com/color/48/stadium.png" alt="stadium"/>
  </div>`;
    return htmlTemplate;
}
export default createSoccerField;