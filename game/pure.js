var myInitialState = {
    playerX: 0,
    playerY: 0,

    velX: 0,
    velY: 0
};

function myBallHandler(keys, state, random) {
    return {
        playerX: state.playerX + state.velX,
        playerY: state.playerY + state.velY,

        velX: state.velX * 1.0002 + (keys.left?(-0.001 * Math.sign(state.velX)):0) + (keys.right?0.001*Math.sign(state.velX):0) + 0.015 * (0.5-random),
        velY: state.velY * 1.0009 + (keys.down?(-0.001):0) + (keys.up?0.001:0) + 0.015 * (0.5-random)
    };
}
