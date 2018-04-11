const ticTacToe = () => {
  let board = [
    [[], [], [],],
    [[], [], [],],
    [[], [], [],],
  ];


  const playTicTacToe = (board) => {
    console.log(board);

    let isXTurn = true;
    if (isXTurn === true) {
      console.log('it is X turn');
    } else {
      console.log('it is O turn');
    }

    const boardLogic = () => {
      const checkRows = (board) => {
        for (let i = 0; i < board.length; i++) {
          if (board[i][0] === 'X' && board[i][1] === 'X' && board[i][1] === 'X') {
            return 'X IS THE WINNER';
          } else if (board[i][0] === 'O' && board[i][1] === 'O' && board[i][1] === 'O') {
            return 'O IS THE WINNER';
          }
        }
      };

      const checkCols = (board) => {
        for (let i = 0; i < board.length; i++) {
          if (board[0][i] === 'X' && board[1][i] === 'X' && board[2][i] === 'X') {
            return 'X IS THE WINNER';
          } else if (board[0][i] === 'O' && board[0][i] === 'O' && board[1][i] === 'O') {
            return 'O IS THE WINNER';
          }
        }
      };

      const checkDiag = (board) => {
        if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
          return 'X IS THE WINNER';
        } else if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') {
          return 'O IS THE WINNER';
        } else if (board[2][0] === 'X' && board[1][1] === 'X' && board[0][2] === 'X') {
          return 'X IS THE WINNER';
        } else if (board[2][0] === 'O' && board[1][1] === 'O' && board[0][2] === 'O') {
          return 'O IS THE WINNER';
        }
      };
    };
  };
  playTicTacToe(board);
};

ticTacToe();
