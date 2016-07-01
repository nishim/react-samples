import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  render() {
    console.log('rendering x:' + this.props.x + ',y:' + this.props.y + ',v:' + this.props.board[this.props.x][this.props.y]);
    let mark;
    switch (this.props.board[this.props.x][this.props.y]) {
    case 1:
      mark = '⭕️';
      break;
    case 2:
      mark = '❌';
      break;
    default:
      mark = '';
    }
    return (
      <div className="cell" onClick={this.handleClick}>{mark}</div>
    );
  }
  
  handleClick() {
    this.props.clickCell(this.props.x, this.props.y);
  }
}

class Row extends React.Component {
  render() {
    console.log(this.props.board);
    let cells = [];
    for (let i = 0; i < this.props.size; i++) {
      cells.push(<Cell key={i + '_' + this.props.y} y={this.props.y} x={i} clickCell={this.props.clickCell} board={this.props.board} />);
    }
    return (
      <div className="row">
      {cells}
      </div>
    );
  }
}

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 1,
      board: []
    };
    for (let i = 0; i < props.size; i++) {
      let row = [];
      for (let i = 0; i < props.size; i++) {
        row.push(0);
      }
      this.state.board.push(row);
    }
  
    this.clickCell = this.clickCell.bind(this);
  }
  
  clickCell(x, y) {
    console.log('x:' + x + ', y:' + y + ', v:' + this.state.board[x][y] + ' clicked.');
    if (this.state.board[x][y] !== 0) {
      return;
    }
  
    let board = this.state.board;
    board[x][y] = this.state.currentPlayer;
    
    this.setState({
      currentPlayer: this.state.currentPlayer === 1 ? 2 : 1,
      board: board
    });
  }
  
  render() {
    let rows = [];
    for (let i = 0; i < this.props.size; i++) {
      rows.push(<Row key={i} y={i} size={this.props.size} clickCell={this.clickCell} board={this.state.board} />);
    }
    return (
      <div className="board">
      {rows}
      </div>
    );
  }
}
