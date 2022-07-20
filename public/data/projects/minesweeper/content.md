Minesweeper single page game using vanilla JavaScript and awesome animations.

# Features

<div style="display: grid; grid-template-columns: 50% 50%;">

<div>

- 3 difficulties
- Customizable grid dimensions
- Responsive design

</div>

<div>

- Written is plain HTML, CSS and JavaScript
- No 3rd party frameworks

</div>

</div>

<br />

<video width="100%" autoplay muted loop>
    <source src="https://i.imgur.com/VBlJOGb.mp4" type="video/mp4">
</video>

# Rules

- Click on a block to open it.
  - The first block you open will NEVER be a mine.
- The block can either:
  - Be empty,
  - Be empty, but have blocks around it with mines,
  - Have a mine.
- Clicking on an empty block opens it and opens all surrounding blocks.
- Clicking on a block that doesn't have a mine displays a number of mines in surrounding blocks.
- Clicking a block with a mine means <span style="color: red; font-weight: bold;">GAME OVER.</span>
- Right-click a block to mark it if you believe that it has a mine.
- When you open all empty blocks, <span style="color: limegreen; font-weight: bold;">YOU WIN.</span>

# Customizability

The game is designed dynamically and allows changing certain game parameters. The configuration is stored in a JSON file and can be changed using the game's interface.

- Board width
- Board height
- Number of mines

<br />

<img src="https://raw.githubusercontent.com/DoubleDebug/minesweeper/main/res/images/previews/gameSettings.png" style="width: 477px; height: 215px;" />

<br />

There are 3 sets of difficulties available - easy, medium and hard. Switching between them changes the size of the board (width & height) and the number of mines. You can also customize your own difficulty and change these values, however there are limits. For example, you can't set the height of the board to 100 because that would fill up the whole screen.

<div style="width: 90%">
   <table>
      <thead>
         <tr>
            <th>Difficulty</th>
            <th>Parameters</th>
            <th>Image</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td style="font-size: 2rem;">easy</td>
            <td style="font-size: 1.5rem;">- width: 8<br>- height: 8<br>- number of mines: 7</td>
            <td><img style="max-width:300px;object-fit:contain" src="https://i.imgur.com/huQDlKF.png"></td>
         </tr>
         <tr>
            <td style="font-size: 2rem;">medium</td>
            <td style="font-size: 1.5rem;">- width: 12<br>- height: 12<br>- number of mines: 25</td>
            <td><img style="max-width:300px;object-fit:contain" src="https://i.imgur.com/QgllJ3b.png"></td>
         </tr>
         <tr>
            <td style="font-size: 2rem;">hard</td>
            <td style="font-size: 1.5rem;">- width: 20<br>- height: 12<br>- number of mines: 50</td>
            <td><img style="max-width:300px;object-fit:contain" src="https://i.imgur.com/efdnS5g.png"></td>
         </tr>
         <tr>
            <td style="font-size: 2rem;">custom</td>
            <td style="font-size: 1.5rem;">- width: [5-30]<br>- height: [5-12]<br>- number of mines: [2-(width * height / 2) - 1]</td>
            <td><img style="max-width:300px;object-fit:contain" src="https://i.imgur.com/ssYGzte.png"></td>
         </tr>
      </tbody>
   </table>
</div>

# Game design

The game follows the MVC (model-view-controller) structure model.
Every component has a:

- model
  - game logic
- view
  - game interface (DOM elements)
- controller
  - utilizes both the model and the view on a higher level and enables communication between them

<br />

![Game design diagram](https://raw.githubusercontent.com/DoubleDebug/minesweeper/main/res/images/previews/gameDesign.png)

# Dependencies

I tried to keep the project as independent as possible. Most of the dependencies are there for the sake of aesthetics.

- <a href="https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers">FontAwesome</a>
  - for various icons/svgs
- <a href="https://www.npmjs.com/package/fireworks-js">Fireworks-JS</a>
  - for celebration when you win the game!
- <a href="https://webpack.js.org">Webpack & webpack-cli</a>
  - for module bundling

# Interesting edge cases

The maximum number of mines on a board is determined in a very specific way, <code>(width \* height / 2) - 1,</code> and it's for a reason.

The first rule of the game says that the first block you open will never have a mine. But under the hood, the game logic is designed so that the blocks around the first block will ALSO never have mines. So while testing different values for the board width, height and number of mines, I ran into a scenario where the number of mines would be 20 and a 5x5 board. This seems OK at first, but when you open a block in the center, it sets that block and 8 surrounding ones to be non-mines. This means that there are 25 - 9 = 16 blocks left. But you set the number of mines to 20. This would break the game and put it into an infinite loop of trying to place a mine.

Edge values for difficulty levels also differ depending on the device used to play the game (mobile, tablets, laptops and desktops). For example, the maximum board width is lower on mobile devices compared to desktop PCs, simply because the screen is smaller. This is all for the purpose of aesthetics and was achieved by using a mix of responsive and adaptive design.
