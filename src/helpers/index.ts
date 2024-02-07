import * as vscode from 'vscode';

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getColor(colorName: string) {
  const capitalizedColorName = colorName[0].toLocaleUpperCase() + colorName.substring(1);

  return new vscode.ThemeColor(`terminal.ansi${capitalizedColorName}`);
}

export { delay, getColor };