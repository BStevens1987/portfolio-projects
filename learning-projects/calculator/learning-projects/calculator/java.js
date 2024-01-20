const container = document.querySelector('#container');

for(let row = 1; row <= 5; row++) {
  const rowContainer = document.createElement('div');
  rowContainer.id = row;
  container.append(rowContainer);
  for(let column = 1; column <= 4; column++) {
    const button = document.createElement('button');
    button.class = 'button';
    rowContainer.append(button);
  };
};