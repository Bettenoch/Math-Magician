function generateButton(buttonName, onClickFunction) {
  return (
    <button type="button" name={buttonName} onClick={onClickFunction}>
      {buttonName}
    </button>
  );
}

function generateRow(rowName, buttons, onClickFunction) {
  if (rowName === 'row-fifth') {
    return (
      <article className={`math-row ${rowName}`}>
        <div>
          {generateButton(buttons[0], onClickFunction)}
        </div>
        <div>
          {buttons.slice(1).map((button) => generateButton(button, onClickFunction))}
        </div>
      </article>
    );
  }
  return (
    <article className={`math-row ${rowName}`}>
      {buttons.map((button) => generateButton(button, onClickFunction))}
    </article>
  );
}

export default function generateBTLayout(calLayout, onClickFunction) {
  return (
    <article className="math-functions">
      {Object.keys(calLayout).map((rowName) => {
        return generateRow(rowName, calLayout[rowName], onClickFunction);
      })}
    </article>
  );
}
