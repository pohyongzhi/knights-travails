function knightMoves(startCoords, endCoords) {
    possiblePosition = [
        [1, 2],
        [2, 1],
        [-1, 2],
        [-2, 1],
        [1, -2],
        [2, -1],
        [-1, -2],
        [-2, -1],
    ];

    const queue = [[startCoords, [startCoords]]];
    const seen = new Set();
    seen.add(JSON.stringify(startCoords));

    while (queue.length > 0) {
        const [currentXY, path] = queue.shift();
        const [currentX, currentY] = currentXY;

        if (currentX === endCoords[0] && currentY === endCoords[1]) {
            console.log(
                `You made it in ${path.length} moves! Here's your path:`
            );
            console.log(path);
        }

        // Loop through all of the possiblePosition from the current position
        for (let i = 0; i < possiblePosition.length; i++) {
            const [offsetX, offsetY] = possiblePosition[i];

            const newX = currentX + offsetX;
            const newY = currentY + offsetY;
            const newXY = [newX, newY];

            // This is the possible moves left
            if (
                newX >= 0 &&
                newX < 8 &&
                newY >= 0 &&
                newY < 8 &&
                !seen.has(JSON.stringify(newXY))
            ) {
                queue.push([newXY, path.concat([newXY])]);
                seen.add(JSON.stringify(newXY));
            }
        }
    }
}

knightMoves([0, 0], [3, 3]);
// knightMoves([3, 3], [0, 0]);
// knightMoves([3, 3], [4, 3]);
// knightMoves([0, 0], [7, 7]);
