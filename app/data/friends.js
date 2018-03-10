// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
        name:"Jerry",
        photo:"https://en.wikipedia.org/wiki/Lion#/media/File:Lion_(Panthera_leo)_(30941994012).jpg",
        scores:[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        name:"Peter",
        photo:"https://en.wikipedia.org/wiki/Fish#/media/File:Georgia_Aquarium_-_Giant_Grouper_edit.jpg",
        scores:[
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ]
    },
    {
        name:"Mary",
        photo:"https://en.wikipedia.org/wiki/Fish#/media/File:Pterois_volitans_Manado-e_edit.jpg",
        scores:[
            3,
            4,
            5,
            3,
            2,
            4,
            2,
            2,
            3,
            2
          ]
    },
    {
        name:"James",
        photo:"https://en.wikipedia.org/wiki/Fish#/media/File:Dunkleosteus_BW.jpg",
        scores:[
            5,
            5,
            5,
            5,
            5,
            5,
            4,
            4,
            4,
            4
          ]
    },
    {
        name:"Sofia",
        photo:"https://en.wikipedia.org/wiki/Giraffe#/media/File:Giraffe_Mikumi_National_Park.jpg",
        scores:[
            4,
            5,
            3,
            1,
            4,
            5,
            2,
            3,
            2,
            1
          ]
    }
  ];
  
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;


 
  