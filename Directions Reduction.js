/*
… a man was given directions to go from one point to another. 
The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. 
Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
Test.assertSimilar(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])
*/

function isBacktrack(idx1, idx2) {
    switch(idx1) {
        case 'NORTH':
            if (idx2 === 'SOUTH') {
                return true
            } else {
              return false
            }
        case 'SOUTH':
            if (idx2 === 'NORTH') {
                return true
            } else {
              return false
            }
        case 'EAST':
            if (idx2 === 'WEST') {
                return true
            } else {
              return false
            }
        case 'WEST':
            if (idx2 === 'EAST') {
                return true
            } else {
              return false
            }
    }
}

function dirReduc(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (isBacktrack(arr[i], arr[i + 1])) {
          arr.splice(i, 2)
          i = -1
      }
    }

    return arr
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])