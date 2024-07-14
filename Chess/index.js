let pos_status = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, 1, -1, -1],
    [-1, -1, -1, -1, -1, 1, -1, -1],
    [-1, -1, -1, -1, -1, 1, -1, -1],
    [-1, -1, -1, -1, -1, 1, -1, -1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
]
let piece_pos = [
    ['w_lrook', 'w_lknight', 'w_lbishop', 'w_queen', 'w_king', 'w_rbishop', 'w_rknight', 'w_rrook'],
    ['w_pawn0', 'w_pawn1', 'w_pawn2', 'w_pawn3', 'w_pawn4', 'w_pawn5', 'w_pawn6', 'w_pawn7'],
    [-1, -1, -1, -1, -1, 1, -1, -1],
    [-1, -1, -1, -1, -1, 1, -1, -1],
    [-1, -1, -1, -1, -1, 1, -1, -1],
    [-1, -1, -1, -1, -1, 1, -1, -1],
    ['b_pawn0', 'b_pawn1', 'b_pawn2', 'b_pawn3', 'b_pawn4', 'b_pawn5', 'b_pawn6', 'b_pawn7'],
    ['b_lrook', 'b_lknight', 'b_lbishop', 'b_queen', 'b_king', 'b_rbishop', 'b_rknight', 'b_rrook']
]




function possible_position(piece, position) {
    let x = parseInt(position[0]);
    let y = parseInt(position[2]);
    let piece_value = get_piece_value(piece);
    let piece_color = get_piece_color(piece);
    console.log(piece_value);
    console.log(x, y);
    if (piece_value == "knight") {
        for (let i = 0; i < 8; i++) {
            switch (i) {
                case 0: y_len = 2; x_len = 1;
                    break;
                case 1: y_len = -1;
                    break;
                case 2: y_len = 1; x_len = -2;
                    break;
                case 3: y_len = -1;
                    break;
                case 4: y_len = 2; x_len = 1;
                    break;
                case 5: x_len = -1;
                    break;
                case 6: y_len = -2; x_len = 1;
                    break;
                case 7: x_len = -1;
                    break;
            }
            let t_x = x + x_len;
            let t_y = y + y_len;
            console.log(t_x, t_y);
            let t_id = `${t_x}_${t_y}`;
            let create = document.createElement("div");
            create.setAttribute("class", "possibility");
            create.setAttribute("name", "possibility");
            create.setAttribute("id", `possibility_${t_id}`);
            let t_pos = document.getElementById(`${t_id}`);
            if (t_pos !== null) {
                if (document.getElementById(`possibility_${t_id}`) == null) {
                    t_pos.appendChild(create);
                }
            }
            // console.log(t_pos);


        }
    }
}

function get_piece_value(piece) {
    if (piece.includes("pawn")) {
        return piece.slice(2, piece.length - 1);
    }
    else if (piece.includes("king") || piece.includes("queen")) {
        return piece.slice(2, piece.length);
    }
    else {
        return piece.slice(3, piece.length);
    }

}

function get_piece_color(piece) {
    if (piece.includes("w_")) {
        return "white";
    }
    else if (piece.includes("b_")) {
        return "black";
    }
}




