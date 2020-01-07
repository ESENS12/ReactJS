import React, { Component } from 'react'
import Square from './Square'

export default class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
        };
      }


      handleClick(index){
        console.log('click! : ' ,index);
        const squares = this.state.squares.slice();
        squares[index] = 'X';
        this.setState({squares: squares});
      }

    renderSquare(i) {
        return <Square onClick={()=>this.handleClick(i)} value={this.state.squares[i]} />;
      }
    
      render() {
        const status = 'Next player: X';
    
        return (
          <div>
            <div className="status">{status}</div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
      }
}