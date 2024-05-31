/* Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const varNFT = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (namee, id, favcolor, location, age) {
    const NFT= { 
        "Name":namee,
        "ID":id,
        "favColor":favcolor,
        "Location":location,
        "Age":age
    }
    varNFT.push(NFT);
    console.log("Mintyyy: "+ namee);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<varNFT.length; i++)
        {
            console.log("\nName: "+varNFT[i].Name);
            console.log("ID: "+varNFT[i].ID);
            console.log("Favourite Color: "+varNFT[i].favColor);
            console.log("Location: "+varNFT[i].Location);
            console.log("Age: "+varNFT[i].Age);
        }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nSo, the various NFTs are: "+varNFT.length);

}

// call your functions below this line

mintNFT("Khushi", 15624, "Pink", "Surewal", 19);
mintNFT("Ragini", 15487, "Black", "Bharoliyan", 19);
mintNFT("Akshit", 15486, "White", "Saharanpur", 21);
mintNFT("Ashish", 14780, "White", "Haryana", 19);
mintNFT("premPrakash", 15179, "White", "pali", 19);
mintNFT("Dheeraj", 10658, "White", "Jammu", 19);
listNFTs();
getTotalSupply();
