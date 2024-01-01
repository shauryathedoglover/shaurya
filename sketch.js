let player;
let obstacle;

function setup() {
    createCanvas(400, 400);
    player = createSprite(width / 2, height - 50, 30, 30);
    obstacle = createSprite(width / 2, height / 4, 50, 20);
}

function draw() {
    background(220);

    // Handle player movement
    if (keyIsDown(LEFT_ARROW)) {
        player.position.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.position.x += 5;
    }

    // Wrap player around the screen
    player.position.x = (player.position.x + width) % width;

    // Draw player and obstacle
    fill(0, 0, 255);
    ellipse(player.position.x, player.position.y, 30, 30);

    fill(255, 0, 0);
    rect(obstacle.position.x, obstacle.position.y, 50, 20);

    // Check for collision
    if (player.overlap(obstacle)) {
        textSize(32);
        fill(255, 0, 0);
        text('Game Over', width / 4, height / 2);
        noLoop(); // Stop the game
    }
}
